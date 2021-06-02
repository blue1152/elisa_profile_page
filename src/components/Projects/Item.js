
const Item = (props) => {
  let btnArray = []
  switch (props.theme) {
  case "Elisa's Portfolio Website":
    btnArray = [
      {
        id: '1',
        text: 'Source code',
        url: '123'
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
    <div className="service-content">
    <h3>{props.theme}</h3>
    <p>{props.description}</p>
    {props.skills.map((item, key) => {
      return(<div className="pj-tag" key={key}>{item}</div>)
    })}
    <div className="pj-line"></div>
      {btnArray.map((item) => {
      const { id, text, url } =  item
      return(<a href={url} target='_blank' rel='noopener noreferrer'><button key={id}>{text}</button></a>)
    })}
  </div>
  )
}
export default Item