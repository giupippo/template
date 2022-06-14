function loadPageOrganizations() {
    const dynamicContent = document.getElementById('dynamic-content');
    $.ajax({
        url: '/organizations.html',
        type:'GET',
        success: function(data){
            dynamicContent.innerHTML = data;
            document.title = "Un sito un pò barboso - Organizations";
            $('#table_organizations').DataTable();
        }
    });
}

function loadActionEmployees() {
    const dynamicContent = document.getElementById('dynamic-content');
    $.ajax({
        url: '/employees.html',
        type:'GET',
        success: function(data){
            dynamicContent.innerHTML = data;
            document.title = "Un sito un pò barboso - Employees";
            $('#table_employees').DataTable();
        }
    });
}

function loadActionTizioBarbuto() {
    const dynamicContent = document.getElementById('dynamic-content');
    $.ajax({
        url: '/tizio-barbuto.html',
        type:'GET',
        success: function(data){
            dynamicContent.innerHTML = data;
            document.title = "Un sito un pò barboso - Tizio barbuto";
            const sidebarLinks = document.querySelectorAll('#sidebar-links a');

            sidebarLinks.forEach(link => {
                link.addEventListener('click', () => {
                    const activeLink = document.querySelector('#sidebar-links a.active');
                    activeLink.classList.remove('active');

                    link.classList.add('active');
                })
            })

            window.onscroll = () => {
                let current = "";

                sidebarLinks.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    // TODO: fix condition
                    if (scrollY >= (sectionTop - sectionHeight/3) ) {
                        current = section.getAttribute("href");
                    }
                });

                sidebarLinks.forEach((li) => {
                    li.classList.remove("active");
                    if (li.getAttribute("href") === current) {
                        li.classList.add("active");
                    }
                });
            };
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadPageOrganizations();
});
