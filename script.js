
function gerar(){

let nome = document.getElementById("nome").value
let cargo = document.getElementById("cargo").value
let email = document.getElementById("email").value
let telefone = document.getElementById("telefone").value
let site = document.getElementById("site").value

let assinatura = `
<table style="font-family:Arial;line-height:1.6">
<tr>
<td>

<strong style="font-size:16px">${nome}</strong><br>
<span style="color:#666">${cargo}</span><br><br>

📧 ${email}<br>
📞 ${telefone}<br>
🌐 ${site}

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

alert("Assinatura copiada! Agora cole no Gmail ou Outlook.")

}
