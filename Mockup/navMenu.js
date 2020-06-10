const navigationMenu = document.getElementById('navMenuDiv')
function createNavMenu(){
    navMenu = `
    <div class="menu">
    <h4>Navigation menu</h4>
    <a  href="groupSelectPage.html">
        <button class="menuButton">Group Select</button>
    </a>
    <a>
        <button class="menuButton">Personal</button>
    </a>
    <div id="menuGroupLink"></div>
    <a>
        <button class="menuButton">end</button>
    </a>
</div>
`
navMenu = navigationMenu.innerHTML
}