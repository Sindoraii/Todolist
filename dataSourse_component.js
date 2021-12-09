(function () {
    function DataSourse() {
        //public methods
        function subscribe(listener) {
            this.liseners.push(listener);
        }

        function update(data) {
            this.data = data;

            function prepareData(data) {
                let propsValue = [];
                if(Array.isArray(data) === true) {
                    return data;
                } else if (data.hasOwnProperty('header') && data.hasOwnProperty('status') && data.hasOwnProperty('description')){
                    for(const prop in data) {
                        propsValue.push(data[prop]);
                    }
                    return propsValue;
                }
                else {
                    console.error('DataSource: input data is incorrect');
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
