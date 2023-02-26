// Button Click Event Listener
document.getElementById('pscBtn').addEventListener('click', showPwdChecker)
document.getElementById('htmlBtn').addEventListener('click', showTagRemover)

// Tooltip Event Listeners
document.getElementById('pwdStrong').addEventListener('mouseenter', () =>{
  document.getElementById('pwdInfo').classList.remove('hidden')

})

document.getElementById('pwdStrong').addEventListener('mouseleave', () =>{
  document.getElementById('pwdInfo').classList.add('hidden')
})

// Show password Event Listener
document.querySelector('.fa-eye').addEventListener('click', ()=>{
  if(document.getElementById('pwdSet').type === 'password'){
    document.getElementById('pwdSet').type = 'text'
  } else {
    document.getElementById('pwdSet').type = 'password'
  }
})

// Password Input Blur Event Listener
document.getElementById('pwdSet').addEventListener('blur', () => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&/\\+=\-_'`\.,])[A-Za-z\d@$!%*?&/\\+=\-'_`\.,]{8,}$/
  const formInput = document.getElementById('pwdSet').value
  if(!re.test(formInput)){
    document.getElementById('alert').classList.remove('hidden')
    document.getElementById('alert-success').classList.add('hidden')
    const pwdLowerCase = /^(?=.*[a-z])[A-Za-z\d@$!%*?&/\\+=\-_'`\.,]{1,}$/
    const pwdUpperCase = /^(?=.*[A-Z])[A-Za-z\d@$!%*?&/\\+=\-_'`\.,]{1,}$/
    const pwdDigit = /^(?=.*\d)[A-Za-z\d@$!%*?&/\\+=\-_'`\.,]{1,}$/
    const pwdChar = /^(?=.*[@$!%*?&/\\+=\-'`\.,])[A-Za-z\d@$!%*?&/\\+=\-_'`\.,]{1,}$/
    const pwdCharCount = /^[A-Za-z\d@$!%*?&/\\+=\-'`\.,]{8,}$/
    if(!pwdLowerCase.test(formInput)){
      document.getElementById('lowercase').classList.add('text-red-500')
      document.getElementById('lowercase').classList.remove('text-leaf')
      document.getElementById('lowercase').classList.remove('hidden')
      document.getElementById('lowercaseStatus').innerText = 'not detected'

    } else {
      document.getElementById('lowercase').classList.remove('hidden')
      document.getElementById('lowercase').classList.remove('text-red-500')
      document.getElementById('lowercase').classList.add('text-leaf')
      document.getElementById('lowercaseStatus').innerText = 'check'
    }

    if(!pwdUpperCase.test(formInput)){
      document.getElementById('uppercase').classList.add('text-red-500')
      document.getElementById('uppercase').classList.remove('text-leaf')
      document.getElementById('uppercase').classList.remove('hidden')
      document.getElementById('uppercaseStatus').innerText = 'not detected'

    } else {
      document.getElementById('uppercase').classList.remove('hidden')
      document.getElementById('uppercase').classList.remove('text-red-500')
      document.getElementById('uppercase').classList.add('text-leaf')
      document.getElementById('uppercaseStatus').innerText = 'check'
    }

    if(!pwdDigit.test(formInput)){
      document.getElementById('digit').classList.add('text-red-500')
      document.getElementById('digit').classList.remove('text-leaf')
      document.getElementById('digit').classList.remove('hidden')
      document.getElementById('digitStatus').innerText = 'not detected'

    } else {
      document.getElementById('digit').classList.remove('hidden')
      document.getElementById('digit').classList.remove('text-red-500')
      document.getElementById('digit').classList.add('text-leaf')
      document.getElementById('digitStatus').innerText = 'check'
    }

    if(!pwdChar.test(formInput)){
      document.getElementById('character').classList.add('text-red-500')
      document.getElementById('character').classList.remove('text-leaf')
      document.getElementById('character').classList.remove('hidden')
      document.getElementById('characterStatus').innerText = 'not detected'

    } else {
      document.getElementById('character').classList.remove('hidden')
      document.getElementById('character').classList.remove('text-red-500')
      document.getElementById('character').classList.add('text-leaf')
      document.getElementById('characterStatus').innerText = 'check'
    }

    if(!pwdCharCount.test(formInput)){
      document.getElementById('charCount').classList.add('text-red-500')
      document.getElementById('charCount').classList.remove('text-leaf')
      document.getElementById('charCount').classList.remove('hidden')
      document.getElementById('charCountStatus').innerText = 'not detected'

    } else {
      document.getElementById('charCount').classList.remove('hidden')
      document.getElementById('charCount').classList.remove('text-red-500')
      document.getElementById('charCount').classList.add('text-leaf')
      document.getElementById('charCountStatus').innerText = 'check'
    }

  } else {
    document.getElementById('alert-success').classList.remove('hidden')
    document.getElementById('alert').classList.add('hidden')
    document.getElementById('lowercase').classList.add('hidden')
    document.getElementById('uppercase').classList.add('hidden')
    document.getElementById('digit').classList.add('hidden')
    document.getElementById('character').classList.add('hidden')
    document.getElementById('charCount').classList.add('hidden')

  }
})

function showPwdChecker(e){
  e.preventDefault()
  const pwdForm = document.getElementById('pwdChecker')
  const tagForm = document.getElementById('tagRemover')
  const wordForm = document.getElementById('wordCounter')

  pwdForm.classList.remove('hidden')
  pwdForm.classList.add('flex')

  tagForm.classList.add('hidden')
  tagForm.classList.remove('flex')

  wordForm.classList.add('hidden')
  wordForm.classList.remove('flex')
}

function showTagRemover(e){
  e.preventDefault()
  const pwdForm = document.getElementById('pwdChecker')
  const tagForm = document.getElementById('tagRemover')
  const wordForm = document.getElementById('wordCounter')

  pwdForm.classList.add('hidden')
  pwdForm.classList.remove('flex')

  tagForm.classList.remove('hidden')
  tagForm.classList.add('flex')

  wordForm.classList.add('hidden')
  wordForm.classList.remove('flex')
}