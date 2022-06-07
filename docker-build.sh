if [ $# -ne 2 ]; then
 echo "Usage: $0 param1 => tag-name / param2 => tag-version"
else
echo :: Beginning :: docker-build.sh
echo :: docker build ../ --tag $1:latest --tag $1:$2
docker build ./ --tag $1:latest --tag $1:$2

echo
echo =================================================
echo REPOSITORY / TAG / IMAGE ID / CREATED / SIZE
echo =================================================
docker images | grep $1 | grep $2
docker images | grep $1 | grep 'latest'
echo =================================================
echo

echo :: Finished ::  docker-build.sh

fi
