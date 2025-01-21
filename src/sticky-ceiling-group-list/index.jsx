import { StickyCeilingGroup } from "./StickyCeilingGroup";

export default function StickyCeilingGroupList() {
  const list = new Array(10)
    .fill("item")
    .map((item, index) => item + (index + 1));
  return (
    <div>
      <label>StickyCeilingGroupList</label>
      <div className="flex flex-col gap-8">
        <StickyCeilingGroup label="Group 1" list={list}></StickyCeilingGroup>
        <StickyCeilingGroup label="Group 2" list={list}></StickyCeilingGroup>
        <StickyCeilingGroup label="Group 3" list={list}></StickyCeilingGroup>
      </div>
    </div>
  );
}
