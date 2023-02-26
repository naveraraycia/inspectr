// HTML Tag Remover Button Event Listener
document.getElementById('tagRemoveBtn').addEventListener('click', (e)=>{
  e.preventDefault()
  const inputField = document.getElementById('tagSet').value
  const re = /<[^>]+(>|$)/g
  if(re.test(inputField)){
    console.log(re.exec(inputField))
    const cleanedText = inputField.replace(re, "")
    document.getElementById('tagSet').value = cleanedText
  }
})