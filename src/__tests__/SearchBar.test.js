import React from 'react'
import ReactDOM from 'react-dom'
import { Simulate, act } from 'react-dom/test-utils'
import { create } from 'react-test-renderer'
import SearchBar from '../components/SearchBar/SearchBar'

let SearchBarComponent

describe('App test suit', () => {
  beforeEach(() => {
    SearchBarComponent = create(<SearchBar />)
  })
  it('Should render without crashing', () => {
    expect(SearchBarComponent.toJSON()).toMatchSnapshot()
  })
  it('Should render tree with correct type', () => {
    const tree = SearchBarComponent.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree.props.type).toBe('text')
  })
  it('Should render placeholderText prop', () => {
    const mockText = 'ACBdef'
    SearchBarComponent.update(<SearchBar placeholderText={mockText} />)
    const jsonSearchComponent = SearchBarComponent.toJSON()
    expect(jsonSearchComponent.props.placeholder).toBe(mockText)
  })
  it('Should call onFilterText fn ', () => {
    const onFilterText = jest.fn()
    const mockText = 'ABCDEF'
    const container = document.createElement('div')
    act(() => {
      ReactDOM.render(<SearchBar filterText={onFilterText} />, container)
    })
    const input = container.querySelector('input')
    expect(input.value).toBe('')

    act(() => {
      input.value = mockText
      Simulate.change(input)
    })
    expect(onFilterText).toBeCalledWith(mockText)
  })
})
