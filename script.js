function gerar(){

let nome = document.getElementById("nome").value
let cargo = document.getElementById("cargo").value
let email = document.getElementById("email").value
let telefone = document.getElementById("telefone").value

let fotoInput = document.getElementById("foto")

let foto = ""

if(fotoInput.files.length > 0){

let readerFoto = new FileReader()

readerFoto.onload = function(e){

foto = e.target.result

montarAssinatura(nome,cargo,email,telefone,foto)

}

readerFoto.readAsDataURL(fotoInput.files[0])

}else{

montarAssinatura(nome,cargo,email,telefone,"")

}

}

function montarAssinatura(nome,cargo,email,telefone,foto){

let assinatura = `
<table style="font-family:Arial, Helvetica, sans-serif; line-height:1.4">

<tr>

<td style="vertical-align:top; padding-right:15px">

${foto ? `<img src="${foto}" width="90" height="90" style="border-radius:50%; object-fit:cover;">` : ""}

</td>

<td style="vertical-align:top">

<div style="font-size:18px; font-weight:bold; color:#75529D;">
${nome}
</div>

<div style="color:#666; font-size:14px; margin-bottom:6px;">
${cargo}
</div>

<div style="font-size:13px; color:#75529D;">
${email} | ${telefone} | fluxxer.com.br
</div>

<br>

<img src="https://fluxxer.com.br/wp-content/uploads/logo-fluxxer.png" width="120">

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
