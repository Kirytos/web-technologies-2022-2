if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}

function init() {


    const items = new ListItems(document.getElementById('list-items'))

    items.init()

    function ListItems(el) {
        this.el = el;

        this.init = function () {
            const parents = this.el.querySelectorAll('[data-parent]')
            parents.forEach(parent => {
                const open = parent.querySelector('[data-open]')
                if(open !== null) {
                    open.addEventListener('click', () => this.toggleItems(parent) )
                }
            })
        }

        this.render = function () {
            this.el.insertAdjacentHTML('beforeend', this.renderParent(this.data))
        }

        this.toggleItems = function (parent) {
            parent.classList.toggle('list-item_open')
        }
    }
}
