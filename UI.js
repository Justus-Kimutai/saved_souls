const submitBtn = document.querySelector('.submit-btn')

const backEndURL = 'https://evangelism.onrender.com'

submitBtn.addEventListener('click',async ()=>{
    const uname = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const region = document.getElementById('region').value;
    const village = document.getElementById('village').value;

    try {
        await fetch(`https://evangelism.onrender.com/save-soul`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ uname, phone, region, village }),
        });
        alert('Post added successfully!');
      } catch (error) {
        console.error(error);
      }
})

async function fetchPosts() {
  try {
    const response = await fetch(`${backEndURL}/get-soul`);
    const posts = await response.json();
    
    const postsList = document.getElementById('postsList');
    postsList.innerHTML = "<h2>All Posts:</h2>";

    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `<strong>Name:</strong> ${post.name}, <strong>Phone:</strong> ${post.phone}, <strong>Region:</strong> ${post.region}, <strong>Village:</strong> ${post.village}`;
      postsList.appendChild(postElement);
    });
  } catch (error) {
    console.error(error);
    alert('Failed to fetch posts');
  }
}
