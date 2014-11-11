function SegmentedController(id, items) {
    this.items = items;
    this.renderIn = function(element) {
        if(typeof element !== "undefined") {

            var container = document.createElement('ul');
            container.setAttribute('class', 'segmented-controller');
            container.setAttribute('id', id);

            element.appendChild(container);

            for(var i=0; i<this.items.length; i++) {
                var itemContainer = document.createElement('li');
                var itemLink = document.createElement('a');
                var itemLabel = document.createTextNode(this.items[i].label);

                itemContainer.setAttribute('class', 'segmented-controller__option');

                var classes = 'segmented-controller__option-link';
                if(i===0) {
                    classes += ' is-current';
                }

                itemLink.value = this.items[i].value;
                itemLink.setAttribute('class', classes);

                itemLink.appendChild(itemLabel);
                itemContainer.appendChild(itemLink);
                container.appendChild(itemContainer);

            }

            return container;
        }
    };
}
