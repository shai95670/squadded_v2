export default {
    getPosts,
    getPostById
}

let posts = []
const authorNames = ['Dana', 'Galit', 'Ron', 'Chen']
const postNames = ['Wooden Table', 'Parisian Carpet', 'Weird Statue']
const postThumbnails = [
  "https://cdn11.bigcommerce.com/s-wz3vnz16dd/images/stencil/1000x1000/products/156/2153/57Walnut_Round_Twigs00__98673.1561399920.png?c=2",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Auguste_Rodin_-_Grubleren_2005-02.jpg/1200px-Auguste_Rodin_-_Grubleren_2005-02.jpg" 
]


function _getRndIdx(arr){
  return Math.floor(Math.random() * arr.length) 
}

function getPosts(){
  console.log('check')
  return posts;  
}

_createPosts()
function _createPosts(){
  console.log('hi');
  for (let i = 0; i < 10; i++) {
      posts.push({
        id: i,
        authorName: authorNames[_getRndIdx(authorNames)],
        authorAvatar: '',
        price: 14.20,
        postName: postNames[_getRndIdx(postNames)],
        postThumbnail: postThumbnails[_getRndIdx(postThumbnails)],
        likes: 0,
        comments: ['cool', 'amazing item', 'bad item'], 
      });    
  }
}

function getPostById(id){
  return posts.find(post => post.id === id)
}

