import ButtonPagination from "./ButtonPagination";

export default function Pagination({ onClickPreviousHandler, onClickNextHandler, nextURL, previousURL }) {
  return (
    <div className="flex gap-2">
      <ButtonPagination onclickHandler={onClickPreviousHandler} disabled={!previousURL}>Previous</ButtonPagination>
      <ButtonPagination onclickHandler={onClickNextHandler} disabled={!nextURL}>Next</ButtonPagination>
    </div>
  )
}