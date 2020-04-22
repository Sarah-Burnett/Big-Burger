
export const scrollSpy = () => {
    console.log("hi");
    const sections = document.querySelectorAll('section');
    sections.forEach( section => {
        const scrollSpyClass = document.querySelector('.scrollspy');
        const scrollSpyLink = document.querySelector(`a[href="#${section.id}"]`);
        section.addEventListener('mouseenter', () => {
            console.log(section.id);
            if (scrollSpyClass) {
                scrollSpyClass.classList.remove('scrollspy');
            }
            if (scrollSpyLink) {
                scrollSpyLink.classList.add('scrollspy');
            }
        });
    });   
}

// //scrollspy
        // for (let id in sectionPos) {
        //     console.log(id);
        //     if (sectionPos[id] <= window.pageYOffset) {
        //         
        //         console.log(document.querySelector(`a[href="#${id}"]`));
        //         document.querySelector.classList.add('scrollspy');
        //     }
        // }