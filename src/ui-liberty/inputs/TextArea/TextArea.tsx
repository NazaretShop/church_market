import { forwardRef } from "react";
import { Component, Label, Wrapper } from "./styles";
import { ITextAreaProps } from "./types";

const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  (props, ref) => {
    const { message, error, label, customHeight, unValidate, ...rest } = props;
    return (
      <Wrapper customHeight={customHeight} unValidate={unValidate}>
        {label && <Label>{label}</Label>}
        <Component
          {...rest}
          ref={ref}
          customHeight={customHeight}
          error={error}
        />
      </Wrapper>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
