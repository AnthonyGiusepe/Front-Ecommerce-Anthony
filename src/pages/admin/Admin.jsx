import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Admin.css'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan'

export default function Admin() {
  return (
    <main className="admin-container">
      <section className="admin-product">
        <h1 className="section-title">ADMINISTRADOR DE PRODUCTOS</h1>
        <div className="admin-btn">
          <h2 className="admin-text-registro">
            Hay un total de 8 productos registrados en el sistema
          </h2>
          <button className="btn-añadir">Añadir</button>
        </div>
        <div className="section-table">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="admin-image">
                  <img src="/src/image/img-bluelabel.png" alt="blue label" />
                </td>
                <td className="admin-name">
                  WHISKY JOHNNIE WALKER BLUE LABEL BOTELLA 750ML
                </td>
                <td className="admin-description">
                  Descubre el placer de saborear el Johnnie Walker Blue Label, una
                  obra maestra del whisky que representa la cima de la destilería de
                  Johnnie Walker. Este whisky escocés mezclado es sinónimo de
                  calidad y exclusividad.
                </td>
                <td className="admin-precio"> S/ 950.00</td>
                <td className="admin-acciones">
                  <div className="btn-accion">
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <FontAwesomeIcon icon={faTrashCan} />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="admin-image">
                  <img src="/src/image/img-jackdaniels.png" alt="jack daniels" />
                </td>
                <td className="admin-name">
                  WHISKY JACK DANIELS HONEY BOTELLA 750ML
                </td>
                <td className="admin-description">
                  Experimenta el Whisky JACK DANIELS Tennessee Honey, una mezcla
                  sublime de whisky Jack Daniels Old No. 7 y una rica miel. Esta
                  botella de 750ml promete una experiencia dulce y suave.
                </td>
                <td className="admin-precio"> S/ 89.00</td>
                <td className="admin-acciones">
                  <div className="btn-accion">
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <FontAwesomeIcon icon={faTrashCan} />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="admin-image">
                  <img
                    src="/Assets/Image/img-shivasregal.webp"
                    alt="shivas regal"
                  />
                </td>
                <td className="admin-name">
                  WHISKY CHIVAS REGAL 18 AÑOS BOTELLA 750ML
                </td>
                <td className="admin-description">
                  Conozca el Whisky CHIVAS REGAL 18 años, una botella de 750ml que
                  destila sofisticación. Envejecido durante 18 años, este whisky
                  escocés ofrece una riqueza de sabor y un carácter incomparable.
                </td>
                <td className="admin-precio"> S/. 210.00</td>
                <td className="admin-acciones">
                  <div className="btn-accion">
                    <i className="fa-regular fa-pen-to-square" />
                    <i className="fa-regular fa-trash-can" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="admin-image">
                  <img src="/Assets/Image/img-ballantines.png" alt="ballantines" />
                </td>
                <td className="admin-name">
                  WHISKY BALLANTINES FINEST 12 AÑOS BOTELLA 750ML
                </td>
                <td className="admin-description">
                  BALLANTINES ES EL SEGUNDO WHISKY ESCOCÉS MÁS VENDIDO DEL MUNDO,
                  REUNE EN SU MEZCLA LO MEJOR DE LAS 4 REGIONES PRODUCTORAS DE
                  WHISKY EN UNA SOLA BOTELLA.
                </td>
                <td className="admin-precio"> S/ 91.00</td>
                <td className="admin-acciones">
                  <div className="btn-accion">
                    <i className="fa-regular fa-pen-to-square" />
                    <i className="fa-regular fa-trash-can" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="admin-image">
                  <img src="/Assets/Image/img-tequila.png" alt="jose cuervo 1800" />
                </td>
                <td className="admin-name">
                  TEQUILA JOSE CUERVO 1800 REPOSADO BOTELLA 750ML
                </td>
                <td className="admin-description">
                  Experimenta el Tequila JOSE CUERVO 1800 Reposado, un tequila de
                  750ml que encapsula la rica tradición mexicana. Reposado en
                  barricas de roble, ofrece un sabor inigualable.
                </td>
                <td className="admin-precio"> S/. 95.00</td>
                <td className="admin-acciones">
                  <div className="btn-accion">
                    <i className="fa-regular fa-pen-to-square" />
                    <i className="fa-regular fa-trash-can" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="admin-image">
                  <img src="/Assets/Image/img-flordecaña.png" alt="jack daniels" />
                </td>
                <td className="admin-name">
                  RON FLOR DE CAÑA 7 AÑOS BOTELLA 750ML
                </td>
                <td className="admin-description">
                  Explora el Ron FLOR DE CAÑA 7 años, una botella de 750ml que
                  personifica la auténtica tradición de Nicaragua. Con 7 años de
                  envejecimiento, este ron brinda una experiencia de sabor distinta
                  y apasionante.
                </td>
                <td className="admin-precio"> S/ 82.00</td>
                <td className="admin-acciones">
                  <div className="btn-accion">
                    <i className="fa-regular fa-pen-to-square" />
                    <i className="fa-regular fa-trash-can" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="admin-image">
                  <img
                    src="/Assets/Image/img-tequilajosecuervo.png"
                    alt="jimador rubio"
                  />
                </td>
                <td className="admin-name">
                  JIMADOR RUBIO REPOSADO BOTELLA 750 ML
                </td>
                <td className="admin-description">
                  El Jose Cuervo es un tequila especial reposado. En barricas de
                  roble blanco americano por un periodo de cuatro meses. Es uno de
                  los tequilas más vendidos del mundo por sus características y es
                  un aliado para crear cócteles de Margarita.
                </td>
                <td className="admin-precio"> S/ 79.00</td>
                <td className="admin-acciones">
                  <div className="btn-accion">
                    <i className="fa-regular fa-pen-to-square" />
                    <i className="fa-regular fa-trash-can" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="admin-image">
                  <img src="/Assets/Image/img-vodka.webp" alt="jack daniels" />
                </td>
                <td className="admin-name">VODKA ABSOLUT BOTELLA 700ML</td>
                <td className="admin-description">
                  Experimenta ABSOLUT, un vodka de 750ml, famoso por su calidad
                  impecable y sabor puro, nacido en el corazón de Suecia.
                </td>
                <td className="admin-precio"> S/ 60.00</td>
                <td className="admin-acciones">
                  <div className="btn-accion">
                    <i className="fa-regular fa-pen-to-square" />
                    <i className="fa-regular fa-trash-can" />
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </section>
    </main>

  )
}
