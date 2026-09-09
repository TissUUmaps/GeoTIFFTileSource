/**
 * Tag access on geotiff.js images.
 *
 * A geotiff.js 3 file directory holds the tags whose values were read with the directory
 * itself: those stored inline in the entry, and those the library marks as eager
 * (BitsPerSample, SampleFormat, TileWidth, ...). Anything else is fetched on demand, so
 * reading such a tag is asynchronous.
 */

/** Read a tag the directory already holds. Throws if geotiff.js deferred it. */
export function getTag(image, name) {
  return image.getFileDirectory().getValue(name);
}

/** Read a tag, fetching it first if geotiff.js deferred it. */
export function loadTag(image, name) {
  return image.getFileDirectory().loadValue(name);
}

/** Whether the directory has the tag, loaded or not. */
export function hasTag(image, name) {
  return image.getFileDirectory().hasTag(name);
}
