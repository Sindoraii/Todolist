(function () {
    function DataSourse() {
        //public methods
        function subscribe(listener) {
            this.listeners.push(listener);
        }

        /**
         * @param data - Array<{title, description, status}>
         *     */
        function update(data) {
            if(data && Array.isArray(data)) {
                this.data = data;
                this.listeners.forEach(listener => {
                    listener(this.data);
                })
            } else {
                console.error('DataSource: Data is not correct.');
            }
        }

        this.listeners = [];
        this.subscribe = subscribe.bind(this);
        this.update = update.bind(this);
    }
    //export
    window.DataSourse = new DataSourse();
})()
