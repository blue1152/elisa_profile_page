import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

const Item = (props) => {
  let btnArray = []
  switch (props.theme) {
  case "Elisa's Portfolio Website":
    btnArray = [
      {
        id: '1',
        text: 'Demo',
        url: '#home'
      },
      {
        id: '2',
        text: 'Source code',
        url: 'https://github.com/blue1152/elisa_profile_page'
      }
    ]
    break;
  case '線上訂房比價系統 (FunTime 訂房比價)':
    btnArray = [
      {
        id: '1',
        text: 'Demo',
        url: 'https://www.funtime.com.tw/inthotel/result.php?city=osaka'
      }
    ]
    break;
  case '協作專案: Alpha Camp Tweet (前端部分)':
    btnArray = [
      {
        id: '1',
        text: 'Source code',
        url: 'https://github.com/blue1152/tweet-vue-2020'
      }
    ]
    break;
  default:
    btnArray = [
      {
        id: '1',
        text: 'Demo',
        url: '123'
      },
      {
        id: '2',
        text: 'Source code',
        url: '123'
      }
    ]
}
  return (
    <div className="projects-content">
      <Figure>
        <FigureImage
          width={300}
          height={200}
          alt={props.theme}
          src={props.imgUrl}
        />
        <FigureCaption>
          <h3>{props.theme}</h3>
          <p>{props.description}</p>
          {props.skills.map((item, key) => {
            return(<Badge className="pj-tag" variant="warning" key={key}>{item}</Badge>)
          })}
          <div className="pj-line"></div>
            {btnArray.map((item) => {
              const { id, text, url } =  item
              return(<a  key={id} href={url} target='_blank' rel='noopener noreferrer'><Button variant='info'>{text}</Button></a>)
            })}
        </FigureCaption>
      </Figure>
  </div>
  )
}
export default Item