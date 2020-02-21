import React, {Fragment} from 'react';
import logo from './logo.svg';
import style from './App.module.css';


class App extends React.Component {

constructor(props) {
    super(props);

    this.state = [
        {
            id: "1",
            name: "Brandon",
            surname: "Garris",
            imgSrc: "https://bigpicture.ru/wp-content/uploads/2016/11/2freckles-redheads-beautiful-portrait-photography-6-583565c31a1df__700.jpg"
        },

        {
            id: "2",
            name: "Lis",
            surname: "Monthers",
            imgSrc: "https://img.rg.ru/img/content/132/44/35/vliianie_kofe_d_850.jpg"
        },
        {
            id: "3",
            name: "Help",
            surname: "Me",
            imgSrc: "https://i.ytimg.com/vi/DesEiWDxcB0/maxresdefault.jpg"
        }

    ]
}

componentDidMount =() => {

};




render() {
    return (
        <Fragment>
            <div className={style.container} key={this.state.id}>


            </div>

        </Fragment>
    );
}
}



export default App;
