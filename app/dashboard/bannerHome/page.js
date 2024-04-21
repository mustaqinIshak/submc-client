'use client'
import { useState, useEffect } from "react"
import { ButtonPrimary } from "@/components/buttonPrimary";
import ButtonAllert from "@/components/buttonAllert";
import Galery from "@/components/galery";
import { FieldText } from "@/components/fieldText"
import DefaultCarousel  from "@/components/Carousel";
import aksesMenu from "../../api/aksesMenu";
import {getAllBanner ,create, deleteBanner} from "@/app/api/bannerHome"
import TitlePage from "@/components/titlePage"
import SpinnerLoading from "@/components/spinner";
import FileInput from "@/components/fileInput"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function BannerHome() {

  
    const MySwal = withReactContent(Swal);
    const [reload, setReload] = useState(false);
    const [aksesMenuData, setAksesMenuData] = useState({});
    const [loadingCarousel, setLoadingCarousel] = useState(false);
    const [bannerItem, setBannerItem] = useState([])
    const [loadingPage, setLoadingPage] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [link, setLink] = useState("")
    const [imagePreview, setImagePreview] = useState(null);
    const [loadingButton, setLoadingbutton] = useState(false);

    const getAksesMenu = async () => {
        try {
            setLoadingPage(true)
            const menu = JSON.parse(localStorage.getItem('menu'));
            const findIdMenu = menu.find(item => item.name === "Banner Home");
            const find = await aksesMenu.getSelectedAksesMenu(findIdMenu.id);
            console.log(find)
            if(find) {
                setAksesMenuData({...find});
                const getBanner = await getAllBanner()
                setBannerItem([...getBanner.data])
            }
            setLoadingPage(false)
        } catch (error) {
            setLoadingPage(false)
            console.log(error);
        }
    }

    const handleGetBanner = async () => {
        setLoadingCarousel(true)
        try {
            const getBanner = await getAllBanner()
            setBannerItem([...getBanner.data])
            setLoadingCarousel(false)
        } catch (error) {
            setLoadingPage(false)
            MySwal.fire({
                icon: "error",
                title: error,
            });
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setSelectedImage(e.target.files[0]);

        const reader = new FileReader();
        reader.onloadend = () => {
        setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleDelete = (id) => {
        MySwal.fire({
            title: `Apakah anda yakin ingin menghapus Banner Home ini "${id}" ?`,
            text: "Anda tidak bisa mengembalikan data ini!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Hapus!'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteBanner(id)
                .then(() => {
                  setReload(!reload)
                  MySwal.fire(
                      'Deleted!',
                      'Data berhasil di hapus',
                      'success'
                  )
              }, err => {
                  setReload(!reload)
                  MySwal.fire({
                      icon: "error",
                      title: err,
                  });
              })
            }
        }) 
    }

    const removePicture = () => {
        setSelectedImage(null)
        setImagePreview(null)
    }
    
    const handleImageUpload = async (event) => {
        event.preventDefault()
        console.log(selectedImage)
        const formData = new FormData();
        formData.append('image', selectedImage);
    
        setLoadingbutton(true)
        try {
          const createBannerHome = await create(formData)

          if(createBannerHome) {
            MySwal.fire({
                icon: "success",
                title: "Berhasil Menambahkan Banner Home", 
            })
            setSelectedImage(null)
        }
        setSelectedImage(null)
        setReload(!reload)
        setLoadingbutton(false)
            
        } catch (error) {
            setLoadingbutton(false)
            MySwal.fire({
                icon: "error",
                title: error,
            });
        }
      };

    useEffect(() => {
        getAksesMenu();
    },[])

    useEffect(() => {
        handleGetBanner();
    },[reload])

    return(
        <div className="container">
             <TitlePage title="Banner Home" />
             {
                loadingPage ?
                <div className="flex w-full h-full items-center justify-center">
                    <SpinnerLoading /> 
                </div>
                :
                aksesMenuData && aksesMenuData.act_read === 1 ? 
                <div className="flex flex-col gap-4">
                    {/* <DefaultCarousel item={bannerItem} /> */}
                    {
                        aksesMenuData && aksesMenuData.act_create === 1 &&
                        <div className="w-full flex flex-col justify-start mb-6 ">
                            <form className="flex flex-col gap-8" encType="multipart/form-data" onSubmit={handleImageUpload}>
                                <FileInput handleImageChange={handleImageChange} imagePreview={imagePreview} />
                                <div className="max-w-md">
                                    <FieldText setValue={setLink} value={link} isRequire={false} name="Link" placeholder="www.subcmmapparel.com/kategori/namaproduk" />
                                </div>
                                <div className="flex w-full">
                                    <ButtonPrimary width="" name="Upload" type={"submit"} isLoading={loadingButton}  />
                                    <ButtonAllert width="" name="Remove" action={removePicture} />
                                </div>
                            </form>
                        </div>
                    }
                    <Galery item={bannerItem} deleteItem={handleDelete} />
                </div>
                :
                <div className="flex items-center justify-center">
                    <span>Anda tidak memiliki akses</span>
                </div> 
             }
        </div>
    )
}