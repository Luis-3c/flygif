const apiKey = 'ZwAXExSKBggjjjCNzwUqXBTxJcp2Fpz1';

export default function getGifs({keyword = "scarlett johansson"} = {}){
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
    return fetch(apiUrl)
      .then(res => res.json())
        .then(response => {
          const {data} = response;
          const gifs = data.map(image => {
              const {images, title, id} = image;
              const {url} = images.downsized_medium;
              return {title, id, url}
          });
          return gifs;
        })
}