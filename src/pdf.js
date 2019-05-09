
import {getDocument, renderTextLayer, GlobalWorkerOptions} from 'pdfjs-dist/lib/pdf.js'
import {TextLayerBuilder} from 'pdfjs-dist/lib/web/text_layer_builder'

window.PDFJS = {
  getDocument,
  renderTextLayer,
  TextLayerBuilder,
  GlobalWorkerOptions,
}
