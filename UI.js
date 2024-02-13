const submitBtn = document.querySelector('.submit-btn')


const backEndURL = 'https://evangelism.onrender.com'

submitBtn.addEventListener('click',async ()=>{
    const uname = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const region = document.getElementById('region').value
    const village = document.getElementById('village').value

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


