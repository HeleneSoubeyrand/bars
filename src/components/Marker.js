import { MdLocationOn} from "react-icons/md"

const Marker = () => {
    return (
        <div>
            <MdLocationOn style={{ width: '40px', height: '40px', color: "red", position: "absolute", bottom: '100%', left: '-20px' }} />
        </div>
    );
};

export default Marker;