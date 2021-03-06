import { Component } from 'react';
import { GroupBase, MultiValueGenericProps, OptionBase } from 'react-select';

export default class MultiValueRemove<
  Option extends OptionBase,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
> extends Component<MultiValueGenericProps<Option, IsMulti, Group>> {}
