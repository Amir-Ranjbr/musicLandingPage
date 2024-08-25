const overview = document.getElementById('overview')
const navItems = document.querySelectorAll('#overview, .navplan, .navfeatures, .navgiftcard,.navcontact')
const crossButton = document.querySelector('.cross')
const sidebar = document.getElementById('sidenav')
const toggle = document.querySelector('.toggle')
const sidenavLinks = document.querySelectorAll('.sidenav_b')
// ---------- Navigation ----------
window.addEventListener('DOMContentLoaded',() =>{
    overview.classList.add('bg');
});
navItems.forEach(item =>{
    item.addEventListener('click',() => {
        navItems.forEach(nav => nav.classList.remove('bg'));
        item.classList.add('bg')
    });
});
// ---------- Side Nav ----------
toggle.onclick = () =>{
    sidebar.style.display = 'flex';
    toggle.style.display = 'none';
}
crossButton.onclick = () =>{
    sidebar.style.display = ' none';
    toggle.style.display = 'block';
};
sidenavLinks.forEach(link =>{
    link.addEventListener('focus',() =>{
        sidenavLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active')
    });
});

// ---------- Transitions ----------
const observeSection = (selectors, animationClass)=>{
    const elements = document.querySelectorAll(selectors);
    const observer = new IntersectionObserver(entries =>{
        entries.forEach(entry =>{
            elements.forEach(el =>{
                el.classList.toggle(animationClass,entry.isIntersecting);
            });
        });
    });
    elements.forEach(element => observer.observe(element));
}
// Call observer for each section
observeSection('.sec2_heading, .sec-2_sub_head, .sec-2_description','sec_2animation');
observeSection('.sec3_content','sec3animation');
observeSection('.sec-4_sub_head, .sec4_head','fade');
observeSection('.content3_subhead, .content3_head','fade_1')
observeSection('.content2_subhead, .content2_head','fade_2')