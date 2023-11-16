/**
 * API föll.
 * @see https://earthquake.usgs.gov/fdsnws/event/1/
 */

/**
 * Sækjum týpurnar okkar.
 * @typedef {import('./api.types.js').EarthquakeProperties} EarthquakeProperties
 * @typedef {import('./api.types.js').EarthquakeGeometry} EarthquakeGeometry
 * @typedef {import('./api.types.js').EarthquakeFeature} EarthquakeFeature
 * @typedef {import('./api.types.js').EarthquakeSearchResults} EarthquakeSearchResults
 */

/** Grunnslóð á API (DEV útgáfa) */
const API_URL = 'https://earthquake.usgs.gov/fdsnws/event/1/';

/**
 * Skilar Promise sem bíður í gefnar millisekúndur.
 * @param {number} ms Tími til að sofa í millisekúndum.
 * @returns {Promise<void>}
 */
export async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(undefined), ms);
  });
}

/**
 * Leita í jarðskjálfta API eftir leitarstreng.
 * @param {string} query Leitarstrengur.
 * @returns {Promise<Quake[] | null>} Fylki af jarðskjálftum eða `null` ef villa
 *  kom upp.
 */
export async function searchEarthquakes(query) {
  const url = new URL('query', API_URL);
  url.searchParams.set('format', 'geojson');
  url.searchParams.set('starttime', '2023--01');
  url.searchParams.set('endtime', '2023-10-17');
  url.searchParams.set('minmagnitude', '5');

  // await sleep(1000);

  let response;
  try {
    response = await fetch(url);
  } catch (e) {
    console.error('Villa við að sækja gögn', e);
    return null;
  }

  if (!response.ok) {
    console.error('Fékk ekki 200 status frá API', response);
    return null;
  }

  /** @type {QuakeSearchResults | null} */
  let data;

  try {
    data = await response.json();
  } catch (e) {
    console.error('Villa við að lesa gögn', e);
    return null;
  }

  /** @type {Quake[]} */
  const results = data?.results ?? [];

  return results;
}

/**
 * Skilar stökum jarðskjálfta eftir auðkenni eða `null` ef ekkert fannst.
 * @param {string} id Auðkenni jarðskjálfta.
 * @returns {Promise<QuakeDetail | null>} Jarðskjálfti.
 */
export async function getEarthquake(id) {
  const url = new URL(`earthquake/${id}`, API_URL);

  let response;
  try {
    response = await fetch(url);
  } catch (e) {
    console.error('Villa við að sækja gögn um jarðskjálfta', e);
    return null;
  }

  if (!response.ok) {
    console.error('Fékk ekki 200 status frá API fyrir jarðskjálfta', response);
    return null;
  }

  /** @type {EarthquakeProperties | null} */
  let data;

  try {
    data = await response.json();
  } catch (e) {
    console.error('Villa við að lesa gögn um jarðskjálfta', e);
    return null;
  }

  return data;
}