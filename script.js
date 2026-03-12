function gerar(){

let nome = document.getElementById("nome").value
let cargo = document.getElementById("cargo").value
let email = document.getElementById("email").value
let telefone = document.getElementById("telefone").value

let fotoInput = document.getElementById("foto")
let logoInput = document.getElementById("logo")

let foto = ""
let logo = ""

if(fotoInput.files.length > 0){
let readerFoto = new FileReader()
readerFoto.onload = function(e){
foto = e.target.result
gerarLogo()
}
readerFoto.readAsDataURL(fotoInput.files[0])
}else{
gerarLogo()
}

function gerarLogo(){

if(logoInput.files.length > 0){

let readerLogo = new FileReader()

readerLogo.onload = function(e){

logo = e.target.result

montarAssinatura(nome,cargo,email,telefone,site,foto,logo)

}

readerLogo.readAsDataURL(logoInput.files[0])

}else{

montarAssinatura(nome,cargo,email,telefone,site,foto,"")

}

}

}

function montarAssinatura(nome,cargo,email,telefone,site,foto,logo){

let assinatura = `
<table style="font-family:Arial;line-height:1.6">

<tr>

<td style="padding-right:15px">

${foto ? `<img src="${foto}" width="80" style="border-radius:50%">` : ""}

</td>

<td style="border-left:3px solid #75529D;padding-left:15px">

<strong style="font-size:16px;color:#75529D">${nome}</strong><br>
<span style="color:#555">${cargo}</span><br><br>

📧 ${email}<br>
📞 ${telefone}<br>
🌐 ${site}

<br><br>

${logo ? `<img src="${logo}" width="120">` : ""}

</td>

</tr>

</table>
`

document.getElementById("assinatura").innerHTML = assinatura

}

function copiar(){

let assinatura = document.getElementById("assinatura")

let range = document.createRange()
range.selectNode(assinatura)

window.getSelection().removeAllRanges()
window.getSelection().addRange(range)

document.execCommand("copy")

alert("Assinatura copiada!")

}
