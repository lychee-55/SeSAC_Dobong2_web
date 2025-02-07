// {chat은 type과 content 전부를 의미 }
export default function Notice({ chat }) {
  // { chat } : {chat:[type:String;content:string]}
  return <div className="notice">{chat.content}</div>;
}
