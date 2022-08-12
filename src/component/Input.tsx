import React from 'react'
import Folder from './Folder'
import { useSelector, useDispatch } from 'react-redux'
import '../style/input.scss'

import { setCSVFile, setCSVFileName } from '../store/files'

export default function Input () {
  //
  const name = useSelector((state: any) => state.files.name)
  const dispatch = useDispatch()

  /**
   * File 업로드 이벤트
   * @param e
   * @returns
   */
  const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input: HTMLInputElement | null = e.target

    const file: File | null = input.files ? input.files[0] : null
    if (!file) return

    const reader = new FileReader()
    reader.readAsText(file)

    // 엑셀 업로드 후 store 에 데이터(파일, 이름)를 저장
    reader.onload = () => {
      dispatch(setCSVFileName(file.name))
      dispatch(setCSVFile(reader.result))
    }
  }

  const uploaded = (name: string) => {
    return name
      ? <Folder name={name}/>
      : <span className="upload-file-button-name">카카오톡 파일 업로드</span>
  }

  return (
    <div className="kakao-file-upload">
      <label className={`upload-file-button ${name ? '-uploaded' : ''}`} htmlFor="input-file">
        { uploaded(name) }
      </label>

      <input
        type="file"
        id="input-file"
        style={{ display: 'none' }}
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        onChange={ changeEvent }
      />
    </div>
  )
}
