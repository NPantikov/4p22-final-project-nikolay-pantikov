import './App.css';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  const arr = [
    {
      title: 'Заголовок 1',
      description: 'Описание 1',
      img: 'https://img3.akspic.ru/attachments/crops/8/5/6/2658/2658-utro-poberezhe-oblako-zakat-oblaka-1920x1080.jpg',
      price: '100'
    },
    {
      title: 'Заголовок 2',
      description: 'Описание 2',
      img: 'https://s1.1zoom.ru/big7/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_2560x1600.jpg',
      price: '110'
    },
    {
      title: 'Заголовок 3',
      description: 'Описание 3',
      img: 'https://img1.akspic.ru/attachments/crops/2/9/3/2/22392/22392-pejzazhi_gor-ozero_peho-nacionalnyj_park_torres_del_pajne-torres_del_pajne_v_chili-gora-1920x1080.jpg',
      price: '120'
    },
    {
      title: 'Заголовок 4',
      description: 'Описание 4',
      img: 'https://mobimg.b-cdn.net/v3/fetch/d2/d278abc240bbb916917fc54ee64925d5.jpeg',
      price: '130'
    },
    {
      title: 'Заголовок 5',
      description: 'Описание 5',
      img: 'https://www.sunhome.ru/i/wallpapers/69/gornoe-ozero-s-chistoi-vodoi.orig.jpg',
      price: '140'
    }
  ]
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div className="App-container">
        {
          arr.map((item, index) => {
            return <Card key={index} 
                         title={item.title} 
                         description={item.description}
                         img={item.img}
                         price={item.price}/>
          })
        }
      </div>
      <div className="App-newsletter">
        <h2>Подписаться на новости компании</h2>
        <Input type="email" placeholder="Введите email" name="email" id="email" />
        <Button>Подписаться</Button>
      </div>
    </div>
  );
}

export default App;
