import "./detail-row.css";

export const DetailRow = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="detailRow">
      <span className="detailRow_title">{title}:</span>
      <span>{text}</span>
    </div>
  );
};
