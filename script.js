function gerar(){

const nome = document.getElementById("nome").value
const cargo = document.getElementById("cargo").value
const email = document.getElementById("email").value
const telefone = document.getElementById("telefone").value

const fotoInput = document.getElementById("foto")

if(fotoInput.files && fotoInput.files[0]){

const reader = new FileReader()

reader.onload = function(e){
montarAssinatura(nome,cargo,email,telefone,e.target.result)
}

reader.readAsDataURL(fotoInput.files[0])

}else{

montarAssinatura(nome,cargo,email,telefone,"")

}

}

function montarAssinatura(nome,cargo,email,telefone,foto){

const logo = "https://fluxxer.com.br/wp-content/uploads/logo-fluxxer.png"

const assinatura = `
<table style="font-family:Arial, Helvetica, sans-serif; line-height:1.4">

<tr>

<td style="vertical-align:top;padding-right:15px">

${foto ? `<img src="${foto}" width="90" height="90" style="border-radius:50%;object-fit:cover;">` : ""}

</td>

<td style="vertical-align:top">

<div style="font-size:18px;font-weight:bold;color:#75529D;">
${nome}
</div>

<div style="color:#666;font-size:14px;margin-bottom:6px;">
${cargo}
</div>

<div style="font-size:13px;color:#75529D;">
${email} | ${telefone} | fluxxer.com.br
</div>

<br>

<img src="${logo}" width="120">

</td>

</tr>

</table>
`

document.getElementById("assinatura").innerHTML = assinatura

}

function copiar(){

const assinatura = document.getElementById("assinatura")

const range = document.createRange()
range.selectNodeContents(assinatura)

const selection = window.getSelection()
selection.removeAllRanges()
selection.addRange(range)

document.execCommand("copy")

selection.removeAllRanges()

alert("Assinatura copiada!")

}
