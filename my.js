let arrProduct = [
    "Phone 12", "Samsung", "Iphone 11", "Xiaomi"
]

function showList() {
    let html = "";
    for (let i = 0; i < arrProduct.length; i++) {
        html += "<tr>";
        html += `<td>${arrProduct[i]}</td>`
        html += `<td><button onclick="deleteProduct(${i})">Delete</button></td>`
        html += `<td><button>Edit</button></td>`
        html += "</tr>"
    }

    document.getElementById('list-product').innerHTML = html;
}

showList();

function add() {
    let name = document.getElementById("name-product").value;
    arrProduct.unshift(name);
    showList();
    document.getElementById("name-product").value = ""
}

function deleteProduct(index) {
    if (confirm('are you sure?')) {
        arrProduct.splice(index, 1)
        showList()
    }
}

/*
function checkSNT(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}


function check() {
    let number = document.getElementById('input').value;
    let check = checkSNT(number);
    if (check == true) {
        alert('la SNT')
    } else {
        alert('not SNT')
    }
}

*/</html>