import '../style/Sass.scss';

export default function Sass() {
  return (
    <>
      <h4>SASS 사용(.scss)</h4>
      {/* sass 기본,nesting과 & */}
      {/* .div1>.div2>.div3 */}
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        <button className="btn orangered">BUTTON1</button>
        <button className="btn btn--opacity">BUTTON2</button>
        <button className="btn btn--blue">BUTTON3</button>
      </div>

      {/* mixin 사용해보기 */}
      <div className="container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>

        <p className="circle"></p>
        <p className="circle"></p>
        <p className="circle"></p>

        <div className="box2">1</div>
        <div className="box2">2</div>
        <div className="box2">3</div>
        <div className="box2">4</div>
      </div>
    </>
  );
}
