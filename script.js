// =============================
// VIDEO HOVER PLAY (desktop)
// =============================

const videos = document.querySelectorAll("video");

videos.forEach(video => {

    video.addEventListener("mouseenter", () => {
        video.play();
    });

    video.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
    });

    video.addEventListener("touchstart", () => {
        if (video.paused) video.play();
        else video.pause();
    });

    // CLICK = OPEN FULLSCREEN
    video.addEventListener("click", () => {
        openModal(video.src);
    });

});


// =============================
// FULLSCREEN MODAL
// =============================

const modal = document.createElement("div");
modal.classList.add("modal");

modal.innerHTML = `
    <div class="modal-content">
        <video id="modalVideo" controls autoplay></video>
        <span class="close">&times;</span>
    </div>
`;

document.body.appendChild(modal);

const modalVideo = modal.querySelector("#modalVideo");
const closeBtn = modal.querySelector(".close");

function openModal(src){
    modal.classList.add("active");
    modalVideo.src = src;
    modalVideo.play();
}

function closeModal(){
    modal.classList.remove("active");
    modalVideo.pause();
    modalVideo.src = "";
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});


// =============================
// PREMIUM SCROLL REVEAL
// =============================

const reveals = document.querySelectorAll(".about, .portfolio, .contact");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.15
});

reveals.forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
});