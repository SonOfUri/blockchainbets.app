new class {
    constructor() {
        this.videoSrc, this.modalTrigger = document.querySelectorAll(".js-video-modal-trigger"), this.modal = document.querySelectorAll(".js-video-lightbox"), this.events()
    }
    events() {
        this.modalTrigger.forEach((e => {
            e.addEventListener("click", (e => {
                e.preventDefault(), this.videoSrc = e.currentTarget.getAttribute("href")
            }))
        })), this.modal.forEach((e => {
            e.addEventListener("shown.bs.modal", (e => {
                e.target.querySelector(".embed-responsive-item").setAttribute("src", this.videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0")
            }))
        })), this.modal.forEach((e => {
            e.addEventListener("hide.bs.modal", (e => {
                e.target.querySelector(".embed-responsive-item").setAttribute("src", this.videoSrc)
            }))
        }))
    }
};