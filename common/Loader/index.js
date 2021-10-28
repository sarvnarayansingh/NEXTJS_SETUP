import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const Loader = () => {
  return (
    <div className="loder">
      <div className="loderImg">
        <div>
          <p>
            <img src={publicRuntimeConfig.assetPrefix + '/static/images/ajax-loader.gif'} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
