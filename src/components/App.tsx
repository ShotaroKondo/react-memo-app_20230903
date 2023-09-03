// import { FC } from "react"
import { ChangeEvent, FC, useState } from "react";
import { styled } from "styled-components";

export const App: FC = () => {
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
		</div>
	);
};

const SButton = styled.button`
  margin-left: 16px;
`;