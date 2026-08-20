import ProfileCard from './components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'ณัชพล', nickname: 'นัท',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['วาโรแล้น', 'หมา'] },
  { id: 1, name: 'ณัฐพิฌา', nickname: 'วาเย',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['เกนชิน', 'เจ๊ฝน', 'gay'] },
  { id: 1, name: 'ธัญลักษณ์', nickname: 'เล้ง',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['สมบัติ', 'รัฐศาสตร์', 'Neo Culture Technology'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
