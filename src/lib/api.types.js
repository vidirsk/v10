/**
 * @typedef {object} EarthquakeProperties
 * @property {number} mag Magnitude of the earthquake.
 * @property {string} place Description of the place.
 * @property {number} time Time when the earthquake occurred, in milliseconds since the epoch.
 * @property {number} updated Time when the earthquake information was last updated, in milliseconds since the epoch.
 * @property {number} tz Timezone offset from UTC in minutes.
 * @property {string} url URL to the detailed webpage for the earthquake.
 * @property {string} detail URL to the detailed API endpoint for the earthquake.
 * @property {number} felt Number of reports of the earthquake being felt.
 * @property {number} cdi Community Internet Intensity Map value.
 * @property {number} mmi Modified Mercalli Intensity value.
 * @property {string} alert Alert level.
 * @property {string} status Status of the earthquake information.
 * @property {number} tsunami Indicates if a tsunami was generated.
 * @property {number} sig Significance of the earthquake.
 * @property {string} net The network that provided this information.
 * @property {string} code A unique identifier for this earthquake within the network.
 * @property {string} ids Comma-separated list of ids for this earthquake.
 * @property {string} sources Comma-separated list of networks contributing data to this event.
 * @property {string} types Comma-separated list of event types.
 * @property {number} nst The number of seismic stations used to determine the location.
 * @property {number} dmin Horizontal distance from the epicenter to the nearest station (in degrees).
 * @property {number} rms Root Mean Square value for the event.
 * @property {number} gap The largest azimuthal gap between azimuthally adjacent stations (in degrees).
 * @property {string} magType The method or algorithm used to calculate the preferred magnitude for the event.
 * @property {string} type Type of seismic event.
 */

/**
 * @typedef {object} EarthquakeGeometry
 * @property {string} type Type of the geometry (e.g., "Point").
 * @property {number[]} coordinates The coordinates array [longitude, latitude, depth].
 */

/**
 * @typedef {object} EarthquakeFeature
 * @property {string} type Type of the feature (e.g., "Feature").
 * @property {EarthquakeProperties} properties Properties of the earthquake.
 * @property {EarthquakeGeometry} geometry Geometry data for the earthquake.
 * @property {string} id A unique identifier for this earthquake.
 */

/**
 * @typedef {object} EarthquakeSearchResults
 * @property {string} type Type of the collection (e.g., "FeatureCollection").
 * @property {EarthquakeFeature[]} features Array of earthquake features.
 * @property {number} bbox Bounding box of the collection.
 */

// Export an empty object to avoid an error if nothing else is exported.
export default {};
