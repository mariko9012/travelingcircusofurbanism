const { MDYToDate } = require('~/assets/commonFunctions.js')

export const state = () => ({
  allPosts: [],
  currentShowablePosts: [],
  categories: [],
  cities: [],
  links: [],
  locations: [],
  tags: [],
  mapMarkers: [],
  mapPolygons: [],
  currentView: [],
  highlight: [],
  doubleHighlight: [],
  breadcrumbs: [],
  isMobile: null,
  currentCity: null,
  canvasImage: null,
  isDev: false,
  viewingAsDev: false,
  panMap: false,
  lightboxSrc: '',
  mobileSearchSelectorIsOpen: false,
})

export const mutations = {
  setBreadcrumbs(state, newCrumbs) {
    state.breadcrumbs = newCrumbs
  },

  setView(state, newView) {
    if (!newView) return (state.currentView = [])
    // first, grab the city
    try {
      state.currentCity =
        newView.center || newView[0].center
          ? null
          : Array.isArray(newView)
          ? newView.reduce((acc, curr) => {
              if (acc === null) return null
              if (acc !== 'none' && acc !== curr.city)
                return null
              else return curr.city
            }, 'none')
          : newView.city
    } catch (e) {}

    state.currentView = parseMapPositionObjectsFromAnything(
      newView,
    )
  },

  setHighlight(state, mapPositions) {
    const parsedLocations = parseLocationNames(mapPositions)
    if (parsedLocations.length > 0) {
      if (
        !state.highlight ||
        state.highlight.length === 0
      ) {
        state.doubleHighlight = []
        state.highlight = parsedLocations
      } else state.doubleHighlight = parsedLocations
    } else {
      if (state.doubleHighlight.length > 0)
        state.doubleHighlight = []
      else state.highlight = []
    }
  },

  setCity(state, city) {
    state.currentCity = city
  },

  setMobile(state, width) {
    const mobileBreakpoint = 768
    state.isMobile = parseInt(width) <= mobileBreakpoint
  },

  setDev(state, isDev) {
    state.isDev = isDev
    state.viewingAsDev = isDev
  },
  setViewingAsDev: (state, viewingAsDev) =>
    (state.viewingAsDev = viewingAsDev),

  setLightboxSrc(state, src) {
    state.lightboxSrc = src
  },

  setLinks(state, arr) {
    state.links = arr
  },

  setMobileSearchSelectorIsOpen(state, isOpen) {
    state.mobileSearchSelectorIsOpen = isOpen
  },

  setCanvasImage(state, image) {
    state.canvasImage = image
  },

  setPan(state, shouldPan) {
    state.panMap = shouldPan
  },

  setCities(state, cities) {
    state.cities = cities
  },
  setCategories(state, categories) {
    state.categories = categories
  },
  setTags(state, posts) {
    state.tags = [
      ...new Set(
        posts
          .reduce(
            (allTags, post) =>
              post.tags
                ? allTags.concat(post.tags)
                : allTags,
            [],
          )
          .map((t) => t.toLowerCase()),
      ),
    ]
  },

  setMapMarkers(state, postData) {
    state.mapMarkers = parseMapPositionObjectsFromAnything(
      postData,
    )
    state.locations = [
      ...new Set(
        state.mapMarkers
          .map((marker) => marker.location)
          .filter((m) => m),
      ),
    ]
  },

  setPolygons(state, postObjects) {
    const polygons = postObjects.reduce(
      (allPolygons, post) =>
        post.polygons
          ? allPolygons.concat(post.polygons)
          : allPolygons,
      [],
    )
    state.mapPolygons = polygons || []
  },

  setViewPolygons(state, polygons) {
    if (polygons)
      state.currentView = state.currentView.concat(
        polygonsBounds(polygons),
      )
  },

  setPosts(state, posts) {
    state.allPosts = posts
  },

  setCurrentShowablePosts(state, posts) {
    state.currentShowablePosts = posts
  },
}

export const actions = {
  nuxtServerInit({ commit, state, dispatch }) {
    const posts = require('~/static/generated/posts.json')
    commit('setDev', !process.static)
    commit('setPosts', posts)
    dispatch('updateShowablePosts')

    const cities = require('~/static/generated/cities.json')
    commit('setCities', cities)

    const categories = require('~/static/generated/categories.json')
    commit('setCategories', categories)

    const links = require('~/../links/links.js')
    commit('setLinks', links)
  },

  resetPosts({ commit, state, dispatch }) {
    // console.log('resetting posts...', state.allPosts)
    if (state.allPosts && state.allPosts.length) return
    const posts = require('~/static/generated/posts.json')
    commit('setPosts', posts)
    dispatch('updateShowablePosts')
  },

  updateShowablePosts({ commit, state }) {
    const showablePosts = state.allPosts.filter(
      (p) =>
        // devs see all.
        state.viewingAsDev ||
        // only show english posts to english readers, etc
        (p.languages[state.i18n.locale] === true &&
          // only show public posts
          p.public[state.i18n.locale] === true &&
          // only show posts that are published in the past
          MDYToDate(p.date).getTime() <
            new Date().getTime()),
    )
    if (state.currentShowablePosts === showablePosts) return
    commit('setCurrentShowablePosts', showablePosts)
    // console.log(state.currentShowablePosts.length)
    commit('setMapMarkers', showablePosts)
    commit('setPolygons', showablePosts)
    commit('setTags', showablePosts)
  },
}

function parseLocationNames(source) {
  // comes in as an array of posts, mapPosition objects, an array of names, or a single one of any
  if (!source) source = []
  if (!Array.isArray(source)) source = [source]
  // if it's post objects, flatten it down to just mapPositions
  if (
    source[0] &&
    (source[0].mapPosition || source[0].polygons)
  )
    source = [].concat.apply(
      [],
      [
        ...source
          .map((post) => post.mapPosition)
          .filter((position) => position),
        ...source
          .map((post) => post.polygons)
          .filter((position) => position),
      ],
    )
  // then grab just the names
  source = source
    .map(
      (positionOrLocation) =>
        positionOrLocation.location ||
        (positionOrLocation instanceof String ||
        typeof positionOrLocation === 'string'
          ? positionOrLocation
          : null),
    )
    .filter((locationName) => locationName)
  // then return only unique names
  return Array.from(new Set(source))
}

function parseMapPositionObjectsFromAnything(source) {
  // comes in as:
  //  a mapPosition object
  //  an array of mapPostition objects
  //  a post
  //  an array of posts
  //    posts can have a mapPosition object
  //    or an array of mapPosition objects

  if (!source || (Array.isArray(source) && !source[0]))
    return []

  let parsedMapPositions =
    source.center || source[0].center
      ? // we can directly use a mapPosition object or an array of mapPosition objects
        source
      : // or, pull mapPosition object or an array of mapPosition objects from posts
      Array.isArray(source)
      ? // if we have multiple posts, for each...
        source
          .map((post) => {
            const arrayOfPositions = Array.isArray(
              post.mapPosition,
            )
              ? post.mapPosition.map((p) => {
                  const city = post.city
                  return {
                    ...p,
                    city,
                  }
                })
              : // if it's not an array of mapPositions, make it one
                [
                  {
                    ...post.mapPosition,
                    city: post.city,
                  },
                ]
            return arrayOfPositions
          })
          // then smash 'em all together
          .reduce((acc, curr) => acc.concat(curr), [])
      : // otherwise, we just use it straight up.
        {
          ...source.mapPosition,
          city: source.city,
        }

  if (!Array.isArray(parsedMapPositions))
    parsedMapPositions = [parsedMapPositions]
  parsedMapPositions = parsedMapPositions.filter((m) => m)
  return parsedMapPositions
}

function polygonsBounds(polygons) {
  if (!polygons) return []
  return [
    {
      location: 'polygonsTopLeft',
      center: [
        Math.min(
          ...polygons.reduce(
            (flattened, polygon) =>
              flattened.concat(
                polygon.coordinates.map(
                  (coord) => coord[0],
                ),
              ),
            [],
          ),
        ),
        Math.min(
          ...polygons.reduce(
            (flattened, polygon) =>
              flattened.concat(
                polygon.coordinates.map(
                  (coord) => coord[1],
                ),
              ),
            [],
          ),
        ),
      ],
    },
    {
      location: 'polygonsBottomRight',
      center: [
        Math.max(
          ...polygons.reduce(
            (flattened, polygon) =>
              flattened.concat(
                polygon.coordinates.map(
                  (coord) => coord[0],
                ),
              ),
            [],
          ),
        ),
        Math.max(
          ...polygons.reduce(
            (flattened, polygon) =>
              flattened.concat(
                polygon.coordinates.map(
                  (coord) => coord[1],
                ),
              ),
            [],
          ),
        ),
      ],
    },
  ]
}
