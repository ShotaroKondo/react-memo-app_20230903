// import { FC } from "react"
import { ChangeEvent, FC, useState } from "react";
import { styled } from "styled-components";

export const App: FC = () => {
  const [memos, setMemos] = useState<string[]>([
    "テスト1",
    "テスト2",
    "テスト3",
  ]);
  const [text, setText] = useState<string>("");
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);
  const onClickAdd = () => {
    alert(text + " added!");
    setText("");
  };
  return (
		<div>
			<h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <SButton onClick={onClickAdd}>追加</SButton>
      <SContainer>
        <p>メモ一覧</p>
        <ul>
          {memos.map((memo, index) => (
            <li key={memo}>
              <SMemoWrapper>
                <p>{memo}</p>
                <SButton>削除</SButton>
              </SMemoWrapper>
            </li>
          ))}
        </ul>
      </SContainer>
		</div>
	);
};

const SButton = styled.button`
  margin-left: 16px;
`;

const SContainer = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`;
const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`;