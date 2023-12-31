import { Articles } from '@/lib/redux/slices/newsSlice/types'

export type ModalContentProps = { slectedNews: Articles; title: string; handleClose: () => void }
