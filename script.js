const a = document.querySelectorAll("a");

    a.forEach(item => {
        item.addEventListener("click", () => {
            a.forEach(link => {
                link.classList.remove("active");
            });
            item.classList.add("active");
        });
    });

    let text = document.querySelector("#text");
    let leaf = document.querySelector("#leaf");
    let hill1 = document.querySelector("#hill1");
    let hill4 = document.querySelector("#hill4");
    let hill5 = document.querySelector("#hill5");
    let plant = document.querySelector("#plant");
    let tree = document.querySelector("#tree");
    
    
    window.addEventListener("scroll" , () => {
        let val = window.scrollY;
    
        text.style.marginTop = val * 2.5 + 'px';
        leaf.style.top = val * -1.5 + 'px';
        leaf.style.left = val * 1.5 + 'px';
        hill5.style.left = val * 1.5 + 'px';
        hill4.style.left = val * -1.5 + 'px';
        hill1.style.top = val * 1 + 'px';
        tree.style.left = val * 1 + 'px';
    
    })
    






