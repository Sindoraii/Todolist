(function () {
    function DataSourse() {
        //public methods
        function subscribe(listener) {
            this.liseners.push(listener);
        }

        function update(data) {
            if(data.hasOwnProperty('header') && data.hasOwnProperty('description')) {
                this.data = data;
                let propsValue = [];

                for(const prop in data) {
                    propsValue.push(data[prop]);
                }
                this.liseners.forEach((lisener) => {
                    lisener(propsValue);
                })


            } else {
                console.error('DataSource: data is incorrect');
            }
        }
        this.liseners = [];
        this.subscribe = subscribe.bind(this);
        this.update = update.bind(this);
    }
    //export
    window.DataSourse = new DataSourse();
})()
