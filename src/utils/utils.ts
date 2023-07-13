export const urlEncode = (urlObj: object):string => {
  return Object.entries(urlObj).join("&").replace(/,/g, "=").replace(/#/g, "%23");
}

export const handleFavoriteClick = (id: string) => {
  console.log(id)
  const existingFavorites = localStorage.getItem('favorites') || '[]';
  const favorites = JSON.parse(existingFavorites);

  const index = favorites.indexOf(id);
  if (index === -1) {
    favorites.push(id);
  } else {
    favorites.splice(index, 1);
  }

  // Update favorites in local storage
  localStorage.setItem('favorites', JSON.stringify(favorites));
};