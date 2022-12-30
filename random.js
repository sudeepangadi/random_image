image_array = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg'
  ]
  
  function get_random_image(){
    random_index = Math.floor(Math.random() * image_array.length);

    selected_image = image_array[random_index]
  
    document.getElementById('image_shower').src = `./image/${selected_image}`
  }