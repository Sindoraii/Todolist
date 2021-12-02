(function () {
    function DataSourse() {
        //public methods
        function subscribe(listener) {
            this.liseners.push(listener);
        }

        function update(data) {
            this.data = data;

            function prepareData(data) {
                let dataArr = [];
                if (Array.isArray(data) === true) {
                    return data;
                } else {
                    dataArr.push(data);
                    return dataArr;
                }
            }
            this.liseners.forEach((listener) => {
                listener(prepareData(this.data));
            })
        }

        this.liseners = [];
        this.subscribe = subscribe.bind(this);
        this.update = update.bind(this);
    }
    //export
    window.DataSourse = new DataSourse();
})()
